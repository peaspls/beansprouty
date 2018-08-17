import React, { Component } from 'react';

const statics =  {
    curveRate : 3,
    defaultCurveValue : 350
};

class AnimatedCurve extends Component {
    constructor(props) {
        super(props);
        this.state = { curveValue: statics.defaultCurveValue, ticking: false };
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll() {        
        if (!this.state.ticking) {
            this.setState({ ticking: true });
            window.requestAnimationFrame(() => {
                this.updateCurve(window.scrollY);
                this.setState({ ticking: false });
            });
        }
    }

    updateCurve(scrollPos) {
        const calculated = (scrollPos >= 0 && scrollPos < statics.defaultCurveValue)
            ? statics.defaultCurveValue - parseFloat(scrollPos / statics.curveRate)
            : statics.defaultCurveValue - parseFloat(statics.defaultCurveValue / statics.curveRate);

        this.setState({ curveValue: calculated });
    }

    render() {
        const { fill } = this.props;
        let draw = "M 800 300 Q 400 " + this.state.curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z";

        return (
            <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
                <path fill={fill} d={draw}></path>
            </svg>
        );
    }
}

export default AnimatedCurve;