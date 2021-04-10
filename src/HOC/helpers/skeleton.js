import React from 'react'
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton';

export default function SkeletonApp(props) {
    let height = props.height || "2rem";
    return (
        <>
            
        <SkeletonTheme color="#c0c6cc" highlightColor="#abb0b5" >
            <Skeleton width="100%" height={height}  style={{marginBottom:".5rem"}}/>
            <Skeleton width="100%" height="1rem" count={3}/>
            <Skeleton width="50%" style={{marginBottom:"4rem"}}/>
        </SkeletonTheme>
                    
        </>
    )
}
