import { useState, useMemo, useId } from 'react';

export const useCollapsible = () => {
	const [expanded, setExpanded] = useState(false);
	const contentId = useId();

	const triggerProps = useMemo(() => {
		return {
			'aria-controls': contentId,
			'aria-expanded': expanded,
			type: 'button',
			role: 'button',
		};
	}, [expanded]);

	const contentProps = useMemo(() => {
		return {
			'aria-hidden': !expanded,
			id: contentId,
			...(!expanded && { tabIndex: -1 }),
		};
	}, [expanded]);

	return { expanded, setExpanded, triggerProps, contentProps };
};
