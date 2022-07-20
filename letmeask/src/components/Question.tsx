import { ReactNode } from 'react';
import '../styles/question.scss';
import classnames from 'classnames'

type QuestionProps = {
    content: string;
    author: {
        name: string;
    };
    children?: ReactNode;
    isHighlighted?:boolean;
    isAnswered?:boolean;
}

export function Question({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false
}:QuestionProps ) {
    return (
        <div className={classnames('question',
        {answered: isAnswered},
        {highlighted: isHighlighted && !isAnswered}
        )}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <p>{author.name}</p>

                </div>
              
                <div>
                    {children}
                </div>
            </footer>
        </div>
    )
}