// Default template for List Widget
{Template {
	$classpath:'samples.widgets.list.styling.CustomTemplate',
	$hasScript:true
}}
	{macro main()}
		// The Div is used to wrap the items with good looking border.
		{@aria:Div data.cfg}

				{section 'Items'}

					{if (data.displayOptions.flowOrientation == 'horizontal')}
						// with columns, horizontal
						<table>
						{foreach item inView data.itemsView}

							{if item_index % data.numberOfColumns == 0}
								<tr>
							{/if}
							<td>{call renderItem(item, item_info.initIndex)/}</td>

							{if (data.displayOptions.tableMode == true)}
								{var checkboxLabelSplit = item.label.split('|')/}
								<td {on click {fn: "itemTableClick", args: {	item : item, itemIdx : item.index }}/}>${checkboxLabelSplit[0]}</td>
								<td {on click {fn: "itemTableClick", args: {	item : item, itemIdx : item.index }}/}>${checkboxLabelSplit[1]}</td>
								<td {on click {fn: "itemTableClick", args: {	item : item, itemIdx : item.index }}/}>${checkboxLabelSplit[2]}</td>
								<td {on click {fn: "itemTableClick", args: {	item : item, itemIdx : item.index }}/}>${checkboxLabelSplit[3]}</td>
							{/if}

							{if (item_index + 1) % data.numberOfColumns == 0}
								</tr>
							{/if}
						{/foreach}
						</table>
					{elseif (data.displayOptions.flowOrientation == 'vertical')/}

						{var lineCount = data.numberOfRows /}
						{var columnCount = data.numberOfColumns /}
						{var outputCount = 0 /}
						{var outputRows = 1 /}

						<table>

						{for var i = 0 ; i < lineCount ; i++}

							<tr>
							{var lastColCount = 0 /}
							{for var j = 0 ; j < columnCount ; j++ }
								<td>
								{var itemIndex = (j*lineCount)+i/}
								{if (itemIndex < data.itemsView.items.length)}
									{var item = data.itemsView.items[itemIndex].value/}
									{call renderItem(item, itemIndex)/}
								{/if}
								{set outputCount = outputCount + 1/}
								</td>
							{/for}
							{set outputRows = outputRows + 1/}
							</tr>
						{/for}
						</table>
					{else/}

						{foreach item inView data.itemsView}
							{call renderItem(item, item_info.initIndex)/}
						{/foreach}

					{/if}

				{/section}
				{if (data.displayOptions.displayFooter)}
					{call footer()/}
				{/if}
		{/@aria:Div}
	{/macro}

	{macro renderItem(item, itemIdx)}
		{var a = _getClassForItem(item)/}

		<a href="#" class="${a}" _itemIdx="${itemIdx}" onclick="return false;">
			{if ! item.label}
				&nbsp;
			{else/}
				${item.label|escape}
			{/if}
		</a>
	{/macro}

{/Template}
