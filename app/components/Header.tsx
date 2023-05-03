import React from 'react'

type Props = {
    body: any;
}

export const Header = (props: Props) => {
    return (
        <header className='shadow'>
            <div className='p-3'>
                {props.body}
            </div>
        </header>
    )
}