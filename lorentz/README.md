# Lorentz Transforms and Special Relativity
Velocity is relative. When you hop in your rocket and move at half the speed of light away from earth, 
from your perspective, the earth is moving at half the speed of light away from you.

This is generally what happens with most small velocities, but things get weird when we approach the speed of light,
you see it has been proven time and time again that light, in a vacuum, is constant, regardless of perspective.
If you were going at half the speed of light, from your perspective light would be still traveling at the speed of light
away from you, not half its speed.

To implement this into our spacetime diagrams, we have created [Lorentz Transformations](https://en.wikipedia.org/wiki/Lorentz_transformation), which do a kind of squeeze-stretch
rotation which changes all velocities relative to the reference speed apart from one: the speed of light.

This causes time to dilate and contract as well as space, leading to things like [the twin "paradox"](https://en.wikipedia.org/wiki/Twin_paradox), where if you are moving, you age 
slower to everyone else; [Relativity of simultaneity](https://en.wikipedia.org/wiki/Relativity_of_simultaneity), where events that happen at the same time in your reference frame do not always happen simultaneously  for other reference frames; and the fact that the faster you go the thinner you become until your ship looks like something resembling a flying pancake. ([length contraction](https://en.wikipedia.org/wiki/Length_contraction))

## How to use it
[Try it in the browser](https://kieranlinton.github.io/LorentzTransformations/index.html)

This is a spacetime diagram, on the horizontal axis we have one spacial dimension (X), and vertically we measure time (t).
It might seem strange to combine space and time like this, but we do it all the time, for example, if someone asks how far away the shop is they could say "it's about 400m away" or "it's about 5 minutes away".

Every **t unit is equivalent to 1 second**, and every **X unit is 299 792 458 m (C)**, meaning light, that goes 299 792 458 m every second, is 
drawn at a perfect 45º angle.

![alt text](https://raw.githubusercontent.com/KieranLinton/LorentzTransformations/master/gitPictures/SpeedOfLight.PNG "Yellow line is light")

We can view different velocities by hovering your mouse over the graph, and get the current position in space and time and the velocity relative to the graph's origin. Click to save the trajectory.

![alt text](https://raw.githubusercontent.com/KieranLinton/LorentzTransformations/master/gitPictures/creatingALine.PNG)

Now for the fun bit, if the Tradgectory is already saved you can click it again to move into its perspective.
As you can see, although the light-green and brown line events happen at the same time relative to the pistachio-green one, when you change
perspective, the events don't align anymore on the time axis.

![alt text](https://raw.githubusercontent.com/KieranLinton/LorentzTransformations/master/gitPictures/GoToPerspective.gif)

Notice light is always C velocity away from the current reference velocity.

![alt text](https://raw.githubusercontent.com/KieranLinton/LorentzTransformations/master/gitPictures/lorentz%20transformations.gif)

