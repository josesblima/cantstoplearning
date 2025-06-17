-- Create a file with this content and run :luafile %
local function test_tailwind_completion()
	-- Get the TailwindCSS client
	local clients = vim.lsp.get_active_clients()
	local tailwind_client

	for _, client in ipairs(clients) do
		if client.name == "tailwindcss" then
			tailwind_client = client
			break
		end
	end

	if not tailwind_client then
		print("No TailwindCSS client found!")
		return
	end

	print("TailwindCSS client found (id: " .. tailwind_client.id .. ")")

	-- Create a test completion request
	local params = {
		textDocument = {
			uri = "file://" .. vim.fn.expand("%:p"),
		},
		position = {
			line = vim.fn.line(".") - 1,
			character = vim.fn.col(".") - 1,
		},
		context = {
			triggerKind = 1,
		},
	}

	print("Sending completion request...")
	tailwind_client.request("textDocument/completion", params, function(err, result)
		if err then
			print("Error requesting completions: " .. vim.inspect(err))
		elseif not result or vim.tbl_isempty(result) then
			print("No completion results returned")
		else
			print("Got completion results: " .. vim.inspect(result.items and #result.items or 0) .. " items")

			if result.items and #result.items > 0 then
				print("Examples:")
				for i = 1, math.min(5, #result.items) do
					print("  - " .. result.items[i].label)
				end
			end
		end
	end)
end

test_tailwind_completion()
-- Run this in Neovim
vim.cmd("LspStop tailwindcss")
vim.cmd("sleep 500m") -- Wait half a second
vim.cmd("LspStart tailwindcss")
