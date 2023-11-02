import React from 'react';

type book = {
    name: string;
    author: string;
}


class Book extends React.Component<book> {
    render() {
        return (
            <>
                <div>
                    <strong>{this.props.name}</strong> written by {this.props.author}
                </div>
            </>
        )
    }
}

export {Book};
export type { book };
