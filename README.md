# Passing Thoughts

A small React project from Codecademy's Full-Stack Engineer path. It's a place to post a quick thought that doesn't stick around: every thought deletes itself 15 seconds after you add it.

**Live site:** https://ktforge.github.io/passing-thoughts/

## What it does

Type a thought and hit Add, and it shows up at the top of the list.
Each thought disappears on its own after 15 seconds.
The × next to a thought removes it right away.
Hitting Add with an empty box doesn't do anything.

For example, if I add "Thinking about coding!" it sits on top of the two starter thoughts, the box clears out, and about 15 seconds later it's gone.

## How to run it

1. Install Node.js if you don't have it.
2. In this folder, run npm install.
3. Run npm run dev and open the link it prints.

## What I learned

The starter app crashed as soon as I clicked the ×. Thought.js was calling removeThought, but App never passed it down as a prop, so it was undefined. Once I wrote removeThought in App and handed it to each Thought, the button worked.

Each Thought runs its own useEffect with a setTimeout for the time it has left. The cleanup function clears that timer, so if I delete a thought early with the ×, its timer doesn't fire later.

I used the callback form of setThoughts in removeThought. The timers run 15 seconds after they're set up, and the callback makes sure they filter the latest list instead of an old copy.

After getting adding to work, I noticed two things: the text stayed in the box after adding, and an empty submit added a blank thought. I cleared the text with setText("") and only add the thought if something was typed.

Built by DeVante Bush
