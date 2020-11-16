import React from "react";

//Import Components
import DynamicPostsMain from './dynamic-posts-main';
import DynamicPostsSide from './dynamic-posts-side';

export default function DualColumn() {
    return(
        <section className='box columns'>
            <article className='column big'>
                <DynamicPostsMain />
            </article>
            <article className='column small'>
                <DynamicPostsSide />
            </article>
        </section>
    )
}