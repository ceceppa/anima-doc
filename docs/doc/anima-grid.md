# Anima Grid

AnimaGrid is used to animate a group/grid of nodes.

## Usage

```gdscript
Anima.grid(parent_node: Node, grid_size: Vector2)
```

## Methods

- [init](#init)
- [then](#then-sequential-animation)
- [with](#with-parallel-animation)
- [wait](#wait)
- [end](#end)
- [play](#play)
- [play_with_delay](#play-with-delay)
- [loop](#loop)
- set_animation
- set_animation_type
- set_start_delay
- set_items_delay
- set_visibility_strategy
- set_duration
- set_loop_strategy

## animation_data

animation_data has the same structure as the one used with [AnimaNode](/doc/anima-node.html#animation_data), where you have this additional parameter:

|Key|Type|Required|Description|
|---|---|---|---|
|animation_type|Anima.GRID|No|The type of animation to apply for the group/grid|

### animation_type

This parameter allows you to specify the order to animate the elements in the given group/grid.

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
_Default:_ SEQUENCE_TOP_LEFT

|Anima.GRID|Description|
|---|---|---|---|
|TOGETHER|All the nodes will be animated at the same time|
|SEQUENCE_TOP_LEFT|The nodes will be animated in order from top left corner to the bottom right|
|COLUMNS_ODD|Animated only the elements whose grid column is odd|
|COLUMNS_EVEN|Animated only the elements whose grid column is even|
|ROW_ODD|Animated only the elements whose grid row is odd|
|ROW_EVEN|Animated only the elements whose grid row is even|
|ODD|Animated only the elements whose column + row index is odd|
|EVEN|Animated only the elements whose column + row index is even|

**NOTE**: A group is considered as a `n x 1` grid, where `n` is the number of nodes.

## Reference

### init

Initialise the grid with the given size:

#### Syntax

```gdscript
init(grid_node: Node, grid_size: Vector2)
```

### then (sequential animation)

Creates a sequential animation for all that fits in the `animation_type`

#### Syntax

```gdscript
then(animation_data: Dictionary)
```

#### Example

```gdscript
.then({ animation_type = Anima.GRID.COLUMNS_ODD, property = "x", to = 5, duration = 0.3 })
```

### with (parallel animation)

Creates a parallel animation for all that fits in the `animation_type`

#### Syntax

```gdscript
with(animation_data: Dictionary)
```

#### Example

```gdscript
.with({ animation_type = Anima.GRID.COLUMNS_EVEN, property = "x", to = 5, duration = 0.3 })
```

### wait

Adds a delay for the next animation.

#### Syntax

```gdscript
wait(delay: float)
```

#### Example

```gdscript
.wait(0.3) # delays the next animation of 0.3
```

### end

Tells Anima to handle all the animation data set.

**NOTE**: You must call this method when working with Grid/Groups, or the animation won't play.

#### Syntax

```gdscript
end()
```

### play

Plays the animation immediately

#### Syntax

```gdscript
play()
```

### play_with_delay

Plays the animation after the given delay in seconds

#### Syntax

```gdscript
play(delay: float)
```

#### Example

```gdscript
.play_with_delay(0.5) # starts the animation after a delay of 0.5 seconds
```


### loop

Loops the animation given `times`

**NOTE**: By default Anima will not re-calculate the relative data. See [set_loop_strategy](#set-loop-strategy) for more information.

#### Syntax

```gdscript
anima.loop(times: int = -1)
```

|Param|Type|Description|
|---|---|---|
|times|int|Number of loops to execute. Use `-1` to have an infinite loop.|

### loop\_with\_delay

Loops the animation given `times` with a interval of `seconds` between each loop

#### Syntax

```gdscript
anima.play_with_delay(delay: float, times: int)
```

|Param|Type|Description|
|---|---|---|
|delay|float|Delay before starting a new loop. **NOTE** it is not applied for the first loop|
|times|int|Number of loops to execute. Use `-1` to have an infinite loop.|

#### Example

```gdscript
var anima = Anima.begin(self, 'sequence_and_parallel')
anima.then({ node = $Panel, animation = 'scale_y', duration = 0.3 })
anima.then({ node = $Panel/MarginContainer/Label, animation = 'typewrite', duration = 0.05 })
anima.then({ node = $Panel/CenterContainer/Button, animation = 'tada', duration = 0.5, delay = -0.5 })

anima.set_visibility_strategy(Anima.Visibility.TRANSPARENT_ONLY)

anima.loop_with_delay(0.5, 5)
```

Loops the animation _5_ times and applies a delay of 0.5 seconds from the 2nd loop.

#### Syntax

```gdscript
loop(times: int = -1)
```

#### Example

```gdscript
.loop(-1) # infinite loop
.loop(5) # loops 5 times
```

### set_animation

Set the animation to apply for each element in the grid.

#### Syntax

```gdscript
set_animation(animation_name: String)
```

#### Example

```gdscript
.set_animation('tada')
```

### set\_animation\_type

Set the animation_type to apply for each element in the grid. See [animation_type](#animation-type) for more information.

#### Syntax

```gdscript
set_animation_type(animation_type: int)
```

#### Example

```gdscript
.set_animation_type(Anima.GRID.TOGETHER)
```

### set\_start\_delay

Set the animation start delay.

#### Syntax

```gdscript
set_start_delay(delay: float)
```

#### Example

```gdscript
.set_start_delay(0.3) # delays the animation start by 0.3 seconds
```

### set\_items\_delay

Set the incremental delay to apply for each element in the grid. The final node delay also depends on its position in the grid/group:

`node delay = items_delay * index`

#### Syntax

```gdscript
set_items_delay(delay: float)
```

#### Example

```gdscript
.set_items_delay(0.3) # 0.3s between each node
.set_items_delay(0) # no delay between each node
```

### set\_visibility\_strategy

Set the visibility strategy for each node in the grid. See [visibility_strategy](/doc/anima-node.html#set-visibility-strategy) for more information.

`node delay = items_delay * index`

#### Syntax

```gdscript
set_items_delay(delay: float)
```

#### Example

```gdscript
.set_items_delay(0.3) # 0.3s between each node
.set_items_delay(0) # no delay between each node
```

### set_duration

Set the duration of the entire animation

#### Syntax

```gdscript
set_duration(delay: float)
```

### set\_loop\_strategy

Set what to do when a new loop starts. See [set_loop_strategy](/doc/anima-node.html#set-loop-strategy) for more information.
