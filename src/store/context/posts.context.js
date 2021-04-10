import  React from 'react';

const PostContext = React.createContext();

const PostProvider = PostContext.Provider;
const PostConsumer = PostContext.Consumer;

export {
    PostContext,
    PostProvider,
    PostConsumer
};