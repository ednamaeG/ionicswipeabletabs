# ionicswipeabletabs
An example of ionic app with swipeable tabs
Step 1: Create new ionic app with tabbed layout
        ionic start swipeabletabs tabs
Step 2:
        Install hammerjs in the cli
            npm install hammerjs --save-dev
            npm install @types/hammerjs --save-dev
            import 'hammerjs'; (in main.ts)
Step 3: Generate Directive for swipe gesture
        ionic g directive directives/swipe
Step 4: Generate Service for the actions to be performed after swiping
        ionic g service services/swipe
