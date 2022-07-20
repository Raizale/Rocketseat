import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail:sendEmailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', () => {
    
     expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo comment',
            screenshot: 'data:image/png;base64,klklkllklklkl',
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendEmailSpy).toHaveBeenCalled();
    });
});

describe('should not be able to submit feedback without type', () => {
    it('should be able to submit a feedback', () => {
     expect(submitFeedback.execute({
            type: '',
            comment: 'exemplo comment',
            screenshot: 'data:image/png;base64,klklkllklklkl',
        })).rejects.toThrow()
    });
});

describe('should not be able to submit feedback without comment', () => {
    it('should be able to submit a feedback', () => {
     expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,klklkllklklkl',
        })).rejects.toThrow()
    });
});

describe('should not be able to submit feedback with an invalid screenshot', () => {
    it('should be able to submit a feedback', () => {
     expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow()
    });
});