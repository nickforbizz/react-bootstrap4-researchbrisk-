import  React from 'react';

const PostHighlightContext = React.createContext();

const PostHighlightProvider = PostHighlightContext.Provider;
const PostHighlightConsumer = PostHighlightContext.Consumer;

export {
    PostHighlightContext,
    PostHighlightProvider,
    PostHighlightConsumer
};