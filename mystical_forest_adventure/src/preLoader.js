import * as PIXI from 'pixi.js';

export default class preLoader {
    constructor(app) {
        this.app = app;
        this.loadAssets();
        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    loadAssets() {
        const loadingText = new PIXI.Text('Loading...', {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
            align: 'center'
        });
        loadingText.anchor.set(0.5);
        loadingText.x = this.app.renderer.width / 2;
        loadingText.y = this.app.renderer.height / 2;
        this.app.stage.addChild(loadingText);

        // Load assets
        this.app.loader
            .add('gameLogo', '../gameassets/loading_screen/Game_Logo.png')
            .add('loaderBG', '../gameassets/loading_screen/Loading_Screen_Background.png')
            .add('loadingBarEmpty', '../gameassets/loading_screen/Loading_bar_empty_1.png')
            .add('loadingBarDesign', '../gameassets/loading_screen/Loading_bar_design_3.png')
            .add('loadingBarFill', '../gameassets/loading_screen/Loading_bar_fill_2.png')
            .add('loadingText', '../gameassets/loading_screen/Loading..._text.png')

            .load((loader, resources) => {
                // All assets are loaded, remove the loading text
                this.app.stage.removeChild(loadingText);
                // this.onPrimaryLoadingComplete()
                // Create a new container
                this.preLoaderContainer = new PIXI.Container();
                this.app.stage.addChild(this.preLoaderContainer);

                // Adding a grophic to Check the view
                console.log(this.app.renderer.width, window.innerWidth);
                const graphics = new PIXI.Graphics();
                graphics.beginFill(0xff0000);
                graphics.drawRect(0, 0, this.app.renderer.width, this.app.renderer.height);
                graphics.endFill();
                this.preLoaderContainer.addChild(graphics);

                // Display the loaded images (example)
                this.background = new PIXI.Sprite(resources.loaderBG.texture);
                this.preLoaderContainer.addChild(this.background);
                this.gameLogo = new PIXI.Sprite(resources.gameLogo.texture);
                this.preLoaderContainer.addChild(this.gameLogo);
                this.loadingBarEmpty = new PIXI.Sprite(resources.loadingBarEmpty.texture);
                this.preLoaderContainer.addChild(this.loadingBarEmpty);
                this.loadingBarFill = new PIXI.Sprite(resources.loadingBarFill.texture);
                this.preLoaderContainer.addChild(this.loadingBarFill);
                this.loadingBarDesign = new PIXI.Sprite(resources.loadingBarDesign.texture);
                this.preLoaderContainer.addChild(this.loadingBarDesign);
                this.loadingText = new PIXI.Sprite(resources.loadingText.texture);
                this.preLoaderContainer.addChild(this.loadingText);
                this.resize();
            });

    }
    resize() {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        this.preLoaderContainer.width = this.app.renderer.width;
        this.preLoaderContainer.height = this.app.renderer.height;
        // this.background.scale.set(this.getMaxScale(this.background));
        // this.background.width = this.preLoaderContainer.width;
        // this.background.height = this.preLoaderContainer.height;
        this.gameLogo.scale.set(this.getMaxScale(this.gameLogo) * 0.8);
        this.gameLogo.x = this.preLoaderContainer.width / 2;
        this.gameLogo.y = this.preLoaderContainer.height * 0.5;
        this.gameLogo.anchor.set(0.5, 0.5);
        this.loadingBarEmpty.scale.set(this.getMaxScale(this.loadingBarEmpty) * 0.1);
        this.loadingBarEmpty.x = this.preLoaderContainer.width / 2;
        this.loadingBarEmpty.y = this.preLoaderContainer.height * 0.8;
        this.loadingBarEmpty.anchor.set(0.5, 0.5);
        this.loadingBarDesign.scale.set(this.getMaxScale(this.loadingBarDesign) * 0.1);
        this.loadingBarDesign.x = this.preLoaderContainer.width / 2;
        this.loadingBarDesign.y = this.preLoaderContainer.height * 0.8;
        this.loadingBarDesign.anchor.set(0.5, 0.5);
        this.loadingBarFill.scale.set(this.getMaxScale(this.loadingBarFill) * 0.1);
        this.loadingBarFill.x = this.preLoaderContainer.width / 2;
        this.loadingBarFill.y = this.preLoaderContainer.height * 0.8;
        this.loadingBarFill.anchor.set(0.5, 0.5);
        this.loadingText.x = this.preLoaderContainer.width / 2;
        this.loadingText.y = this.preLoaderContainer.height * 0.9;
        this.loadingText.anchor.set(0.5, 0.5);
        // console.log("Resize", this.preLoaderContainer.width, this.preLoaderContainer.height);
    }
    getMaxScale(element) {
        // console.log("getMaxScale : ", Math.max(window.innerWidth / element.width, window.innerHeight / element.height))
        return Math.max(window.innerWidth / element.width, window.innerHeight / element.height)
    }
}