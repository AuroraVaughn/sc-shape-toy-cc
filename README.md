# Shape Toy Coding Challenge

## Tools / Frameworks Used
* Angular CLI
* Angular 12
* rxjs

## Known Bugs
In Chrome the drag and drop accelerates due to a bug in chromium when handling mouse movement.
Please test using firefox. This would require hand rolling the mouse movement to fix, and I think it's out of the scope of the challenge and I want over time already.

## Approach

Initially I spent some amount of time working on offscreen canvas, however due to low support and not knowing your testing procedure for these I dropped this approach in favor of working with services in Angular. 

The there are four major structures I used in this project:
* Classes - I used these to create shape behavior and used an abstract class as a means of enforcing the polyformic methods needed by the canvas service. 
* Services - This is where I placed the largest portion of the logic for canvas and forms.
* Components - The components were meant to be as minimal as I could keep them. In a real application I would likely move more logic into them, but due to the nature of the coding challenge I focused on having a few files that might need to change radically as possible.
* Pages - There is only a single page, but in a more fleshed out application these would the componets that are routed to and built built up by the smaller components. 

## Architecture

### Canvas Service
The canvas service is the lench pin of the architecture for this project. This service. The goal is to have a little shape specific code as possible within this service.

This service maintains four peices of state.
#### Canvas
A reference to the canvas is maintained for the purpose as it is used for a number of calculations. 
#### Ctx (context)
This is the 2d context of the canvas. While redundant to maintain both canvas and context, we retrieve and use the ctx enough, that it cleans up the code significantly to maintain this state, and eliminates the repeat calls required to get context from the canvas.
#### CurrentShapes
This is the state of the canvas as Typescript understands it. This array contains instances of the shape class, and is key to detecting interactions with shapes, as well as redrawing the canvas after a change.
#### SelectedShapes
This array maintains references to any selected shapes and is used to render the controls for editing as well as drag and drop functionality.


## Extending the Application
This application should allow a smooth extension of the current functionality. I regret the number of changes required for a new shape, but the steps seem clear. Create a class, add the get Form Group method to the Shape Service, and update the shape types. I cannot promise no other changes would be needed, but this is the path I had in mind. 

The shape cards will likely need to be broken into their own components and be injected rather than using *ngIf as it will not be maintainable in the long run. I would have looked for an elegant solution, but I was out of time to spend on anything fancy.

Undo / Redo should be doable by creating a hook that saved the current version of the arrays to some type of state. Similar with save functionality.

I think this system MAY break if we tried to allow free drawing or handles to pivot arcs. It might be doable as state on the individual class for an Arc, but I can't imagine how to do it just now. 

## Performance
This is probably where this solution falls down some what. While the performance should be bad, this would benefit greatly from moving some of this work off the main thread. This is expecially true if we add animations/fancy shapes that need a lot more calculation. 

I think the amount of state is healthy for what it's doing now, but if undo/redo funcationality is added it could become a memory hog. I would consider using a front end database or even local storage to chunk sections/individual past states. 

This is my first singificant work with canvas's api, so unfortunately I don't know what I don't know about it's quirks when it comes to performance. Please let me know if I made any blunders or accidentally sly moves!
