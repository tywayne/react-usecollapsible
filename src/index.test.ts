import React from 'react';
import { act, renderHook } from '@testing-library/react';

import { useCollapsible } from '.';

describe('useCollapsible', () => {
	const uniqueId = '1';

	const contentProps = {
		expanded: {
			'aria-hidden': false,
			id: uniqueId,
		},
		collapsed: {
			'aria-hidden': true,
			tabIndex: -1,
			id: uniqueId,
		},
	};

	const triggerProps = {
		expanded: {
			'aria-controls': uniqueId,
			'aria-expanded': true,
			role: 'button',
			type: 'button',
			tabIndex: 0,
		},
		collapsed: {
			'aria-controls': uniqueId,
			'aria-expanded': false,
			role: 'button',
			type: 'button',
			tabIndex: 0,
		},
	};

	jest.spyOn(React, 'useId').mockImplementation(() => uniqueId);

	it('should return default props', () => {
		const { result } = renderHook(() => useCollapsible());

		expect(result.current.expanded).toEqual(false);
		expect(result.current.contentProps).toEqual(contentProps.collapsed);
		expect(result.current.triggerProps).toEqual(triggerProps.collapsed);
	});

	it('should return expanded props after state change', () => {
		const { result } = renderHook(() => useCollapsible());

		expect(result.current.expanded).toEqual(false);
		act(() => result.current.setExpanded(true));
		expect(result.current.expanded).toEqual(true);
		expect(result.current.contentProps).toEqual(contentProps.expanded);
		expect(result.current.triggerProps).toEqual(triggerProps.expanded);
	});

	it('should return expanded props when options.defaultedExpanded is true', () => {
		const { result } = renderHook(() => useCollapsible({ defaultExpanded: true }));

		expect(result.current.expanded).toEqual(true);
		expect(result.current.contentProps).toEqual(contentProps.expanded);
		expect(result.current.triggerProps).toEqual(triggerProps.expanded);
	});

	it('should use provided id if options.id is set', () => {
		const customId = 'my_custom_id';
		const { result } = renderHook(() => useCollapsible({ id: customId }));

		expect(result.current.contentProps.id).toEqual(customId);
	});
});
