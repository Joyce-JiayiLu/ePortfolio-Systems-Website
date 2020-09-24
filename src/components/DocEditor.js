import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class DocEditor extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
        outputHTML: '<p></p>'
    }

    componentDidMount () {
        this.isLivinig = true
        // contents change in editor after 3 seconds
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount () {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
        })
    }

    render () {

        const { editorState, outputHTML } = this.state

        return (
            <div>
                <div className="editor-wrapper">
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleChange}
                    />
                </div>
                {/*<h5>输出内容</h5>*/}
                {/*<div className="output-content">{outputHTML}</div>*/}
            </div>
        )

    }

}