import { useState, useMemo, useId, ButtonHTMLAttributes } from 'react';

export interface UseCollapsibleOptions {
	defaultExpanded: boolean;
}
export interface TriggerProps {
	'aria-controls': string;
	'aria-expanded': boolean;
	type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	role: ButtonHTMLAttributes<HTMLButtonElement>['role'];
	tabIndex: number;
}

export interface ContentProps {
	'aria-hidden': boolean;
	id: string;
	tabIndex?: number;
}

export const useCollapsible = (options?: Partial<UseCollapsibleOptions>) => {
	const [expanded, setExpanded] = useState(options?.defaultExpanded ?? false);
	const contentId = useId();

	const triggerProps: TriggerProps = useMemo(() => {
		return {
			'aria-controls': contentId,
			'aria-expanded': expanded,
			type: 'button',
			role: 'button',
			tabIndex: 0,
		};
	}, [expanded]);

	const contentProps: ContentProps = useMemo(() => {
		return {
			'aria-hidden': !expanded,
			id: contentId,
			...(!expanded && { tabIndex: -1 }),
		};
	}, [expanded]);

	return { expanded, setExpanded, triggerProps, contentProps };
};
