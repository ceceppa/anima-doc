# Anima

Once activated, the addon will add the Anima singleton class to your project. This class allows you to set up animations and create your own.

## Custom nodes

Anima provides those additional nodes:

- [AnimaNode](/doc/anima-node.html), used to handle the setup of all the animations supported by the addon
- [AnimaGrid](/doc/anima-grid.html), used to handle the setup of all the animations for your group/grids
- [AnimaTween](/doc/anima-tween.html), is the custom Tween used that allows the magic to happen :)

## Syntax

- [begin(node, animation_name)](#begin)
- [group(node)](#group)
- [register_animation(script, animation_name)](#register-animation)
- [get_available_animations()](#get-available-animations)

## Enums

### Pivot

```gdscript
enum PIVOT {
	CENTER,
	CENTER_BOTTOM,
	TOP_CENTER,
	TOP_LEFT,
	LEFT_BOTTOM,
	RIGHT_BOTTOM
}

```

### Visibility
```gdscript
enum VISIBILITY {
	IGNORE,
	HIDDEN_ONLY,
	TRANSPARENT_ONLY,
	HIDDEN_AND_TRANSPARENT
}

```

### Group / Grid
```gdscript
enum GRID {
	TOGETHER,
	SEQUENCE_TOP_LEFT
	COLUMNS_ODD,
	COLUMNS_EVEN,
	ROWS_ODD,
	ROWS_EVEN,
	ODD,
	EVEN
}
```

### Loop
```gdscript
enum LOOP {
	RECALCULATE_RELATIVE_DATA,
	USE_EXISTING_RELATIVE_DATA,
}
```

## Reference

### begin

This method is used to programmatically add the AnimaNode to the scene as child of the specified **node** one.
It will return the AnimaNode added attached to the specified **node**.

**NOTE**: You can call `begin` multiple times and Anima will only add one AnimaNode to the specified one for each `animation_name` specified.

#### Syntax
```gdscript
begin(node: Node, animation_name = 'Anima') -> AnimaNode:
```

|Parameter|Type|Description|
|---|---|---|
|node|Node|The node where to attache the AnimaNode generated during the process|
|animation_name|String|_(optional)_ The animation name.|

#### Example

```gdscript
var anima := Anima.begin(self, 'my cool animation')
```

### group

This method is used to animate all the direct child of the node specified.

So, suppose you have three buttons as a child of a VBoxContainer. You want to animate all of them in sequence using the same animation. In this case, the `group` method is the perfect choice for you, as it
allows you to specify the group and the animation to use for each direct child of it.

#### Syntax

```gdscript
group(node_group: Node) -> AnimaGrid:
```

|Parameter|Type|Description|
|---|---|---|
|node_group|Node|The node of whom children we want to animate|

#### Example:

```gdscript

# VBoxContainer
#   |-> Button1
#   |-> Button2
#   |-> Button3
var anima := Anima.group($VBoxContainer)

anima.set_animation("tada")
anima.set_items_delay(0.3) # the delay between each children animation
anima.play()
```

The following example will animate the three child node of the `VBoxContainer`, Button1, Button2 and Button3.
The animation of each child node will be delayed of 0.3 seconds between each other, so:

1. Button1 -> delay = 0
2. Button2 -> delay = 0.3
3. Button3 -> delay = 0.6

### grid

This method is used to treat all the node's direct child as part of a grid, and animate them accordingly

#### Syntax

```gdscript
grid(node_group: Node, grid_size: Vector2) -> AnimaGrid:
```

|Parameter|Type|Description|
|---|---|---|
|node_group|Node|The node of whom children we want to animate|
|grid_size|Vector2|The size of the grid (m * n)|

#### Example:

Suppose we have a parent node with nine child button. We can consider them as a node on a grid of 3x3:

![Grid 3x3](../images/grid-3-3.png)

This allows us to animate them using different method of grouping, for example:

- Anima.GRID.ROWS_ODD => Will animate elements in odd rows: B1, B2, B3 and B8, B8, B9
- Anima.GRID.EVEN => Will animate elements where the sum of their index is even: B1, B3, B5, B7, B9

For more info see [enums](#group-grid)

```
```gdscript
var anima := Anima.grid($VBoxContainer, Vector2(3, 3))

anima.then({ animation_type = Anima.GRID.EVEN, property = "opacity", from = 0, to = 1, duration = 0.3 })
anima.then({ animation_type = Anima.GRID.ODD, property = "opacity", from = 0, to = 1, duration = 0.3 })

anima.play()
```

The following example will fade in the elements in the following order:

1. B1, B3, B5, B7, B9
2. B2, B4, B6, B8

For more information about have a look at [AnimaGrid](/doc/anima-grid.html).

### register_animation

This method allows to add your own animation to the list of the available one.

For more information look at: [How to register a new animation](/doc/custom-animations.md#how-to-register-a-new-animation)

#### Syntax

```gdscript
register_animation(script, animation_name: String) -> void:
```

|Parameter|Type|Description|
|---|---|---|
|script|Script|The script to invoke|
|animation_name|String|The animation name|

#### Example

```gdscript
register_animation(self, 'cool_animation')

# Now you can use it
anima.then({ node = $node, animation = 'cool_animation' })
```

### get_available_animations

Returns a list of all the animations available

#### Syntax

```gdscript
get_available_animations() -> Array:
```