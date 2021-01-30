# Introduction

Creating rich animations can be a bit tedious, and Anima solves this problem for you. Allowing to run sequential, parallel and concurrent animations with few lines of code and simple syntax.
It has built-in about 89 animations and 33 easings, with the ability to easily add your own.

## Installation

Anima is a regular editor plugin. [Download the addon](https://github.com/ceceppa/anima) and copy the contents of addons/anima into the same folder in your project, and activate it in your project settings.

## Example

```gdscript
var anima := Anima.begin(self)

anima.then({ node = $node, animation = "tada", duration = 0.7 })
anima.play()
```

**NOTE** in Godot 4.0 you'll be able to wrap everything in parenthesis to avoid repeating "[variable].":

```gdscript
# Works on Godot 4.0 only:

var anima = (
  Anima.begin(self)
  .then({ node = $node, animation = "tada", duration = 0.7 })
)
```

## Live demo

Do you want to give it a try? Here a live demo with some example: [https://anima.ceceppa.me/demo](https://anima.ceceppa.me/demo)