# ionicswipeabletabs
An example of ionic app with swipeable tabs
<p>Step 1: Create new ionic app with tabbed layout
        ionic start swipeabletabs tabs</p>

<p>Step 2:
        Install hammerjs in the cli
            npm install hammerjs --save-dev
            npm install @types/hammerjs --save-dev
            import 'hammerjs'; (in main.ts)
</p>
<p>
Step 3: Generate Directive for swipe gesture
        ionic g directive directives/swipe
</p>
<p>
Step 4: Generate Service for the actions to be performed after swiping
        ionic g service services/swipe
</p>
