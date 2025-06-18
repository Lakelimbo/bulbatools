import { Dialog as SheetPrimitive } from 'bits-ui';
import Trigger from './trigger.svelte';
import Close from './close.svelte';
import Overlay from './overlay.svelte';
import Content from './content.svelte';
import Header from './header.svelte';
import Footer from './footer.svelte';
import Title from './title.svelte';
import Description from './description.svelte';

const Root = SheetPrimitive.Root;
const Portal = SheetPrimitive.Portal;

export {
	Root,
	Close,
	Trigger,
	Portal,
	Overlay,
	Content,
	Header,
	Footer,
	Title,
	Description,
	//
	Root as Sheet,
	Close as SheetClose,
	Trigger as SheetTrigger,
	Portal as SheetPortal,
	Overlay as SheetOverlay,
	Content as SheetContent,
	Header as SheetHeader,
	Footer as SheetFooter,
	Title as SheetTitle,
	Description as SheetDescription
};
