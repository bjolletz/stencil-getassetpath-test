import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'stencil-asset',
  styleUrl: 'stencil-asset.css',
  assetsDirs: ['assets']
})
export class StencilAsset {

  @Prop() image = "sunset.jpg";

  render() {
   return <img src={getAssetPath(`./assets/${this.image}`)} />
  }
}

