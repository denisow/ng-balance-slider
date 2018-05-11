import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'balance-slider',
  templateUrl: './balance-slider.component.html',
  styleUrls: ['./balance-slider.component.scss']
})
export class balanceSliderComponent implements OnInit, OnDestroy {
    public colorBase: string = '#4CAF50';
    public colorBg: string = '#d3d3d3';
    public value: number = 0;
    public minValue: number = -10;
    public maxValue: number = 10;

    public over: boolean = false;
    public active: boolean = false;
    public sliderStyle: object;

    public ngOnInit() {
        this.onChange();
    }

    public ngOnDestroy() {
    }
    public getSliderStyle () :object{
        let oStyle = {
            background: this.colorBg,
        };
        let direct: string = this.value > 0 ? 'right' : 'left';
        let lim: number = Math.abs(this.value > 0 ? this.maxValue : this.minValue);
        let gradientGap: number= ( Math.abs(this.value) * 50 / lim ) + 50;
        if(this.value !== 0){
            oStyle.background = 'linear-gradient(to '+direct+','+this.colorBg+' 50%,'+this.colorBase+' 50% ,'+this.colorBase+' '+gradientGap+'%, '+this.colorBg+' '+gradientGap+'%)';
        }
        return oStyle;
    }

    public onChange (event?){
        this.sliderStyle = this.getSliderStyle();
        // console.log('onChange',event)
    }

    public onAbort(event){
        // console.log('onAbort',event);
    }
    public onBeforeinput(event){
        // console.log('onBeforeinput',event);
    }
    public onBlur(event){
        // console.log('onBlur',event);
    }
    public onClick(event){
        // console.log('onClick',event);
    }
    public onCompositionstart(event){
        // console.log('onCompositionstart',event);
    }
    public onCompositionupdate(event){
        // console.log('onCompositionupdate',event);
    }
    public onCompositionend(event){
        // console.log('onCompositionend',event);
    }
    public onDblclick(event){
        // console.log('onDblclick',event);
    }
    public onError(event){
        // console.log('onError',event);
    }
    public onFocus(event){
        // console.log('onFocus',event);
    }
    public onFocusin(event){
        // console.log('onFocusin',event);
    }
    public onFocusout(event){
        // console.log('onFocusout',event);
    }
    public onInput(event){
        // console.log('onInput',event);
    }
    public onKeydown(event){
        // console.log('onKeydown',event);
    }
    public onKeypress(event){
        // console.log('onKeypress',event);
    }
    public onKeyup(event){
        // console.log('onKeyup',event);
    }
    public onLoad(event){
        // console.log('onLoad',event);
    }
    public onMousedown(event){
        this.active = true;
        // console.log('onMousedown',event);
    }
    public onMouseenter(event){
        // console.log('onMouseenter',event);
    }
    public onMouseleave(event){
        // console.log('onMouseleave',event);
    }
    public onMousemove(event){
        // console.log('onMousemove',event);
    }
    public onMouseout(event){
        this.over = false;
        this.active = false;
        // console.log('onMouseout',event);
    }
    public onMouseover(event){
        this.over = true;
        // console.log('onMouseover',event);
    }
    public onMouseup(event){
        this.active = false;
        // console.log('onMouseup',event);
    }
    public onResize(event){
        // console.log('onResize',event);
    }
    public onScroll(event){
        // console.log('onScroll',event);
    }
    public onSelect(event){
        // console.log('onSelect',event);
    }
    public onUnload(event){
        // console.log('onUnload',event);
    }
    public onWheel(event){
        // console.log('onWheel',event);
    }



}
