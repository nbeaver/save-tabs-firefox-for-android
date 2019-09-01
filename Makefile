ZIP :=save_tabs_android.zip

.PHONY : all clean

all : $(ZIP)

$(ZIP): background.js manifest.json icons/icon.svg
	zip --quiet $@ $^

clean :
	rm -f -- $(ZIP)
