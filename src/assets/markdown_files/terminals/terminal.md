# The Terminal Rabbit Hole

TTY, terminal emulator, shell, console, are these words confusing? Yes. Is there a simple explanation for what each of these things are? I'm afraid not. Is this a damn interesting topic nonetheless? Hell yeah!

Part of the issue I had trying to understand all these concepts is the overlaps and sometimes inconsistencies in the naming conventions, so I'll start by giving out some terminal lingo, many of the different words we use to refer to terminal related stuff and succint definitions:

## Terminal Terminology

**TeleTYpewriter** aka teleprinter, teletype or TTY - The OG terminal, an actual physical device that allowed writing to and reading from a computer, invented in the late 30s, now obsolete and replaced by our fully electronic terminals.

**TTY** aka virtual terminal - Also called TTY, see the confusion? This refers to that terminal you can access by pressing a combination of keys like Ctrl+Alt+F3. These shouldn't be confused with the terminals you probably use every day. Right now, whatever graphical environment you're running, will be inside one of these TTYs. run the `loginctl list-sessions` command to see in which TTY your login session is:

![a title](/images/terminals/loginctl.png)

My session is running on tty2, yours might be different depending of many factors. Now that I know the tty, I can grep the processes in tty2:

![a title](/images/terminals/ps.png)

This is super cool, we can see that the first process has my login session and it has a flag to run i3 which is my tiling window manager, as opposed to Gnome for instance, which would be the default desktop environment for Ubuntu. The second process is Xorg which is the graphical system on which i3 runs. And in the end we have i3 itself.

I've only had to actually use a tty once when something broke in my i3 config file and I just had to go and delete my last changes to fix it, but since it broke my graphical interface I had to modify the file through the tty. So although the utility of the tty is limited for the average user, there are certainly use cases for it.

But when we think of a terminal, we usually think of our terminal emulators like gnome-terminal, kitty, alacritty etc. So It's about time we introduce:

**Pseudoterminal Interfaces** aka PseudoTeleTYpe or PTY - The file `/dev/ptmx` is a a pseudoterminal multiplexer device and it receives a file descriptor for a pseudoterminal master and creates a slave in `/dev/pts` (pseudoterminal slave). Is this all a bit confusing? We're almost, almost there, this is pretty much what we use daily.

When we open our terminal emulator of choice, the pseudoterminal multiplexer opens a pseudo-device in `/dev/pts` and whatever you type in the terminal, goes to master, to the slave, to bash and back, essentially emulating a tty/virtual terminal but allowing for multiple terminals to coexist under the same tty. Let's take a look at this brand new kitty terminal I've just opened and see which pseudoterminal we're currently using by typing the _tty_ command:

![a title](/images/terminals/tty.png)

So when you open your terminal emulator of choice, kitty in my case, it opens `/dev/ptmx`, then the kernel returns a file descriptor number, let's say fd 13, which will be the master side of the pseudoterminal pair. This File descriptor will be the kitty's way to communicate with the slave which is created in `/dev/pts/2` for instance. Now every time you type a character, kitty receives the keystroke, writes it to master (kitty's process fd 13), the kernel pty system sends it to your slave in /dev/pts/2, bash reads reads the command and writes it back to the slave, kitty's newly opened file descriptor receives the output from the slave and it's displayed in your screen.

I know this is all a bit confusing, to me it really helps when I actually go and find all these files, so let's do that:

Let's start by figuring out what's the process id of a newly opened kitty terminal with `echo $PPID`. Now we can go inside the directory of that process inside `/proc` and list all it's file descriptors to try and find out the fd that is the master of this pty.

![a title](/images/terminals/master_fd.png)

We found them! Master isn't just an obscure concept anymore, it's something very concrete, it's file descriptor 13 of our terminal emulator kitty, and it communicates with bash through the pseudo-device in `/dev/pts/3`.

## Terminal Recap

Old teletypewriters were physical devices that allowed reading and writing to a computer. Now we have virtual terminals/TTYs that emulate how the old physical TTYs worked and despite it being just software now, we can see very clearly how the implementation mimics their ancestor. For convenience, we use terminal emulators that can open a pseudoterminal, which is an abstraction of the virtual terminal, and allows for multiple pseudoterminal pairs to be open in the same TTY session.

Now that we have a very light overview of the different types of terminals, I think it makes sense to dive a bit deeper into how these terminals to communicate with a SHELL like bash/zsh/fish which in turn, will communicate with the kernel through system calls. But let's leave it for the next article!

If you enjoyed the read and the topic and want to read more, you can leave your e-mail below and I'll notify you when I write the next article.
