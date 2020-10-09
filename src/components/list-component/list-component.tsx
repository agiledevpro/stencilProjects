import { Component, h, Prop } from '@stencil/core';


@Component({
  tag:'list-component',
  styleUrl:'list-component.css',
  shadow:true
})

export class ListComponent {
  @Prop() list : Array<object>;
  @Prop() name: string

  updateList() {
    this.list.push(<li>{this.name}</li>)
    return this.list
  }

  render() {
    return <div>
      <ui>{this.list}</ui>
    </div>
  }
}
