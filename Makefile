ZIP :=save_tabs_android.zip

.PHONY : all clean

all : $(ZIP)

$(ZIP): save_tabs.js manifest.json icons/icon.svg
	zip --quiet $@ $^

readme.html : readme.rst
	rst2html $< $@

clean :
	rm -f -- $(ZIP)
