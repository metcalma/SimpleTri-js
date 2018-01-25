function drawTriangle(){
  var canvas = document.getElementById("gl-canvas"); //don't need to specify what kind of variable. all can be var
  var gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) { alert("WebGL is not avalible"); }

  gl.viewport(0, 0, 512, 512 );
  gl.clearColor( .2, .2, 0.6, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  var p0 = vec( 0,0 );
  var p1 = vec( 1,0 );
  var p2 = vec( 0,1 );

  var arr = [p0, p1, p2];

  var bufferId = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, buferId);
  gl.bufferData( gl.ARRAY_Buffer, flatten(arr), gl.STATIC_DRAW);


}
