var menuState = {
   create: function() {

      var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background_menu');
      background.anchor.set(0.5);

      video = game.add.video('back');

      video.play(true);
      //  x, y, anchor x, anchor y, scale x, scale y
      video.addToWorld();
      
      var button_play = game.add.sprite(game.world.centerX, game.world.centerY-50, 'button_play');
      button_play.anchor.set(0.5);
      var button_credit = game.add.sprite(game.world.centerX, game.world.centerY+50, 'button_credit');
      button_credit.anchor.set(0.5);

      //  Enables all kind of input actions on this image (click, etc)
      button_play.inputEnabled = true;
      button_play.events.onInputDown.add(this.start, this);

      button_credit.inputEnabled = true;
      button_credit.events.onInputDown.add(this.credit, this);

   },

   start: function() {
      game.state.start('intro');
      menu_music.stop();
   },

   credit: function() {
      game.state.start('credit');
   }

};