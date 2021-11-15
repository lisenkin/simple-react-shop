import React, { Component } from 'react'
import ErrorComponent from './error-component'


export default class ErorPage extends Component {
    state = {
        error: false
    }
    componentDidCatch() {
        this.setState({ error: true })
    }
    render() {
        return this.state.error ? <ErrorComponent /> : this.props.children
    }
}