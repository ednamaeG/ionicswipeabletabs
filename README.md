# ionicswipeabletabs
An example of ionic app with swipeable tabs
<p>Step 1: Create new ionic app with tabbed layout
        <br/>
        ionic start swipeabletabs tabs</p>

<p>Step 2:
        Install hammerjs in the cli <br/> 
            npm install hammerjs --save-dev <br/>
            npm install @types/hammerjs --save-dev <br/>
            import 'hammerjs'; (in main.ts)
</p>
<p>
Step 3: Generate Directive for swipe gesture <br/>
        ionic g directive directives/swipe
</p>
<p>
Step 4: Generate Service for the actions to be performed after swiping <br/>
        ionic g service services/swipe
</p>
