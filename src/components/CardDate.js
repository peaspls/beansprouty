import React, { Component } from 'react';
import moment from 'moment';

class CardDate extends Component {
    render() {
        const { date } = this.props

        const day = moment(date).format('D');
        const month = moment(date).format('MMM');
        const year = moment(date).format('YYYY');

        const style = {
            root: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: 55,
                height: 55,
                padding: 0,
                zIndex: 1,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'rgb(184, 208, 120, 0.95)',
                color: '#fff',
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 20,
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px',
            },
            day: {
                fontSize: 15,
                fontWeight: 400,
            },
            month: {
                fontSize: 12,
                fontWeight: 300,
                textTransform: 'uppercase',
            },
            year: {
                fontSize: 8,
            }
        }

        return (
            <div style={style.root}>
                <div style={style.day}>{day}</div>
                <div style={style.month}>{month}</div>
            </div>
        );
    }
}

export default CardDate;