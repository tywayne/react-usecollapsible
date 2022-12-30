import { act, renderHook } from '@testing-library/react';

import { useCollapsible } from '.';

describe('useCollapsible', () => {
	it('should return default props', () => {
		const id = ':r0:';
		const { result } = renderHook(() => useCollapsible());

		expect(result.current.expanded).toEqual(false);
		expect(result.current.contentProps).toEqual({
			'aria-hidden': true,
			tabIndex: -1,
			id,
		});
		expect(result.current.triggerProps).toEqual({
			'aria-controls': id,
			'aria-expanded': false,
			role: 'button',
			type: 'button',
		});
	});

	it('should return expanded props after state change', () => {
		const id = ':r1:';
		const { result } = renderHook(() => useCollapsible());

		expect(result.current.expanded).toEqual(false);
		act(() => result.current.setExpanded(true));
		expect(result.current.expanded).toEqual(true);
		expect(result.current.contentProps).toEqual({
			'aria-hidden': false,
			id,
		});
		expect(result.current.triggerProps).toEqual({
			'aria-controls': id,
			'aria-expanded': true,
			role: 'button',
			type: 'button',
		});
	});
});
