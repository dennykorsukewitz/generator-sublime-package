import sublime
import sublime_plugin


<% if (sublime_settings) { -%>
def plugin_loaded():

    global settings
    settings = sublime.load_settings("<%= package_name_pascal_case %>.sublime-settings")
<% } -%>


class <%= command_name %>Command(sublime_plugin.<%= command_type %>):
    def run(self, edit):

        # Insert "Hello, World!" at the beginning of the current file.
        self.view.insert(edit, 0, "Hello, World!")

        # Sets the message "Hello, World!" that appears in the status bar.
        sublime.status_message("Hello, World!")

        # Show a quick panel to select an item in a list.
        # on_select will be called once, with the index of the selected item. If the quick panel was cancelled, on_select will be called with an argument of -1.
        sublime.active_window().show_quick_panel(
            items=["yes", "no"],
            on_select=self.quick_panel_selected,
            on_highlight=None,
            flags=32,
            selected_index=-1,
            placeholder="Your placeholder",
        )

        # Shows the input panel, to collect a line of input from the user.
        sublime.active_window().show_input_panel(
            caption="Hello, World!",
            initial_text="Hello, World!",
            on_done=self.input_panel_done,
            on_change=None,
            on_cancel=None,
        )

        # Sets the contents of the clipboard.
        sublime.set_clipboard('some message')

        # Displays a message dialog to the user.
        sublime.message_dialog('some message')

        # Displays an error dialog to the user.
        sublime.error_message('some message')

        # Runs the named ApplicationCommand with the (optional) given arguments.
        self.view.run_command("toggle_setting", {"setting": "word_wrap"})

        # ScopeName
        ScopeName = self.view.scope_name(self.view.sel()[0].a)

        # ScopeText
        ScopeText = self.view.substr(self.view.extract_scope(self.view.sel()[0].a))

    def quick_panel_selected(self, index):

        if index == -1:
            return

        sublime.status_message("Quick Panel Done!")

    def input_panel_done(self, value):

        if value == -1:
            return

        sublime.status_message("Input Panel Done!")
