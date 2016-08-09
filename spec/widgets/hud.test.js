describe('Hud', function() {

  beforeEach(function() {

  });

  afterEach(function() {

  });

  xdescribe('Initialization', function() {
    it('should initialize', function() {

    });
  });

  xdescribe('bindEvents', function() {

  });

  xdescribe('createStateMachine', function() {

  });

  describe('Control availability', function() {
    it('should be available when *either* annotations or image manipulation have been enabled', function() {
      var tests = [
        {anno:true,image:false},
        {anno:false,image:true},
        {anno:true,image:true},
        {anno:false,image:false}
      ];
      tests.forEach(function(test) {
        var hud = new Mirador.Hud({
          appendTo: $("<div/>"),
          canvasControls: {
            "annotations": {
              "annotationLayer": test.anno,
            },
            "imageManipulation" : {
              "manipulationLayer": test.image,
              "controls" : {
                "rotate" : true,
                "brightness" : true,
                "contrast" : true,
                "saturate" : true,
                "grayscale" : true,
                "invert" : true
              }
            }
          }
        });
        if(test.anno || test.image) {
          expect(hud.contextControls).toBeTruthy();
        } else {
          expect(hud.contextControls).toBeFalsy();
        }
        expect(hud.element.find('.mirador-osd-annotation-controls').length).toBe(test.anno ? 1 : 0);
        expect(hud.element.find('.mirador-manipulation-controls').length).toBe(test.image ? 1 : 0);
      });
    });
  });
}); 
