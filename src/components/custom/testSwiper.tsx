"use client";

import {Gallery, Item} from "react-photoswipe-gallery";

const MyGallery = () => (
  <Gallery>
    <Item
      height="768"
      original="https://placekitten.com/1024/768?image=1"
      thumbnail="https://placekitten.com/80/60?image=1"
      width="1024"
    >
      {({ref, open}) => (
        <img ref={ref} src="https://placekitten.com/80/60?image=1" onClick={open} />
      )}
    </Item>
    <Item
      height="768"
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
    >
      {({ref, open}) => (
        <img ref={ref} src="https://placekitten.com/80/60?image=2" onClick={open} />
      )}
    </Item>
  </Gallery>
);

export default MyGallery;
