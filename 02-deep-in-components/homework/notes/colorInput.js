import React from 'react';

export class ColorInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    id: 1,
                    color: 'red'
                },
                {
                    id: 2,
                    color: 'yellow'
                },
                {
                    id: 3,
                    color: 'green'
                },
                {
                    id: 4,
                    color: 'blue'
                }
            ]
        };
    }
    
    
    render() {
        return (
            <div className="colorInput">
                <ul className="colorInput">
                    {
                        this.state.colors.map((item, idx) => {
                            return (
                                <li key={idx} style={{backgroundColor: item.color}}>
                                    <input type="radio" name="colorInput" data-color={item.color}/>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}