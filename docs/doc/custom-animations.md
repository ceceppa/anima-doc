# Custom animations

## How to register a new animation

Let's create an animation that animates the `x` position and also `rotates` the given node.

```gdscript
# demo.gd file

func _init():
	Anima.register_animation(self, 'move_and_rotate')
```

With that code we told Anima that the **demo.gd** holds the information for the animation called **move_and_rotate**.
Now when we're trying to use the animation, Anima will invoke the `generate_animation` function from the script we specified.

### generate_animation

This function is invoked by AnimaNode when we call its play method. So, in here we need to tell the AnimaTween what the animation does.

### Syntax

```gdscript
func generate_animation(anima_tween: AnimaTween, data: Dictionary) -> void:
```

| Parameter   | Type       | Description                                                  |
| ----------- | ---------- | ------------------------------------------------------------ |
| anima_tween | AnimaTween | The tween that is running the animation                      |
| data        | Dictionary | The animation data we passed to `then` and/or `with` methods |

Inside this function we have to generate our animation using [add_frames](/doc/anima-tween.html#add-frames) and/or [add_relative_frames](/doc/anima-tween.html#add-relative-frames).

### Example

The full example will look like:

```gdscript
func init():
  Anima.register_animation(self, 'move_and_rotate')

  var anima := Anima.begin(self)
  anima.then({ node = $node, animation = "move_and_slide", duration = 1 })

func generate_animation(anima_tween: AnimaTween, data: Dictionary) -> void:
  var x_frames = [
    { percentage = 0, from = 0 },
    { percentage = 50, to = -10 },
    { percentage = 100, to = +100 },
  ]
  var rotate_frames = [
    { from = 0, to 360, easing = Anima.EASING.EASE_IN_OUT }
  ]

  anima_tween.add_relative_frames(data, "x", x_frames)
  anima_tween.add_frames(data, "rotation", rotate_frames)
```

In the example, we use `add_relative_frames` for the **x** position, as we don't want to specify absolute X position, but we want it relative to the node one.

Why there is no `percentage` here?

```gdscript
  var rotate_frames = [
    { from = 0, to 360, easing = Anima.EASING.EASE_IN_OUT }
  ]
```

This is equivalent to:

```gdscript
  var rotate_frames = [
    { percentage = 0, from = 0, easing = Anima.EASING.EASE_IN },
    { percentage = 100, t0 = 360, easing = Anima.EASING.EASE_OUT },
  ]
```

So, suppose your animation has only an initial and final value. In that case, you can omit the `percentage` attribute and write everything as a single frame.

## Multiple Animations


```
	if data.animation == '3dboxes':
```