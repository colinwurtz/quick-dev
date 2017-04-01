class RoadmapMargins {
    constructor(topPad
        , leftSidePad
        , bottomPad
        , barHeight
        , widthAdjustment
        , chartDiv
        , gapAdjustment
        , vertTextPad
        , numberOfBars
    ) {
        this.topPad = topPad;
        this.leftSidePad = leftSidePad;
        this.bottomPad = bottomPad;
        this.barHeight = barHeight;
        this.widthAdjustment = widthAdjustment;
        this.chartDiv = chartDiv;
        this.gapAdjustment = gapAdjustment;
        this.vertTextPad = vertTextPad;
        this.numberOfBars = numberOfBars;
    }


    get width(){
        return this.chartDiv.clientWidth - this.widthAdjustment;
    }

    get height(){
        
        let initialHeight = this.chartDiv.clientHeight - this.bottomPad;
        let minHeight = this.numberOfBars * (this.barHeight + 2 * this.gapAdjustment) + this.bottomPad;
        
        if(minHeight < initialHeight){
            return minHeight;
        } else{
            return initialHeight;
        }
    }
    

    get gap(){
        return this.barHeight + this.gapAdjustment;
    }

    get xAxisStart(){
        return this.width - this.leftSidePad;
    }
}
