// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import * as Services from '../../../../../core/Services';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
    timelineIndex: number,
    service: string,
    contentFormContent: Object,
    updateContentText: Function,
};

const textCount = (service: string, text: string): string => {
    const maxWord = service === Services.Twitter ? 140 : 500;
    const wordCount = text.length;
    if(wordCount <= maxWord){
        return wordCount + '文字';
    }else{
        return wordCount + '文字 警告：投稿できない可能性があります';
    }
}

const ContentField = (props: Props) => (
    <TextField
        value={props.contentFormContent.text}
        onChange={(event) => props.updateContentText({text: event.target.value, timelineIndex: props.timelineIndex})}
        helperText={textCount(props.service, props.contentFormContent.text)}
        id="textContent"
        className={props.classes.root}
        margin="none"
        multiline
        fullWidth
        rowsMax={8}
    />
);

export default withStyles(styles)(ContentField);
