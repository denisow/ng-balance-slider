import { Component } from '@angular/core';



@Component({
  selector: 'balance-slider',
  templateUrl: './balance-slider.component.html',
  styleUrls: ['./balance-slider.component.scss']
})
export class balanceSliderComponent {
    public value: number = 0;

    public onChange (event){
        console.log('onChange',event)
    }

    public onAbort(event){
        console.log('onAbort',event);
    }
    public onBeforeinput(event){
        console.log('onBeforeinput',event);
    }
    public onBlur(event){
        console.log('onBlur',event);
    }
    public onClick(event){
        console.log('onClick',event);
    }
    public onCompositionstart(event){
        console.log('onCompositionstart',event);
    }
    public onCompositionupdate(event){
        console.log('onCompositionupdate',event);
    }
    public onCompositionend(event){
        console.log('onCompositionend',event);
    }
    public onDblclick(event){
        console.log('onDblclick',event);
    }
    public onError(event){
        console.log('onError',event);
    }
    public onFocus(event){
        console.log('onFocus',event);
    }
    public onFocusin(event){
        console.log('onFocusin',event);
    }
    public onFocusout(event){
        console.log('onFocusout',event);
    }
    public onInput(event){
        console.log('onInput',event);
    }
    public onKeydown(event){
        console.log('onKeydown',event);
    }
    public onKeypress(event){
        console.log('onKeypress',event);
    }
    public onKeyup(event){
        console.log('onKeyup',event);
    }
    public onLoad(event){
        console.log('onLoad',event);
    }
    public onMousedown(event){
        console.log('onMousedown',event);
    }
    public onMouseenter(event){
        console.log('onMouseenter',event);
    }
    public onMouseleave(event){
        console.log('onMouseleave',event);
    }
    public onMousemove(event){
        // console.log('onMousemove',event);
    }
    public onMouseout(event){
        console.log('onMouseout',event);
    }
    public onMouseover(event){
        console.log('onMouseover',event);
    }
    public onMouseup(event){
        console.log('onMouseup',event);
    }
    public onResize(event){
        console.log('onResize',event);
    }
    public onScroll(event){
        console.log('onScroll',event);
    }
    public onSelect(event){
        console.log('onSelect',event);
    }
    public onUnload(event){
        console.log('onUnload',event);
    }
    public onWheel(event){
        console.log('onWheel',event);
    }



}
