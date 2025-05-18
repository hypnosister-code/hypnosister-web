#!/bin/bash

# Instalacja wymaganych pakietów
echo "==> Instaluję IBus, Typing Booster i słowniki..."
sudo pacman -Syu --noconfirm ibus ibus-typing-booster hunspell hunspell-en hunspell-pl hunspell-ru

# Ustawienie IBus jako domyślnego systemu IME (Input Method Engine)
echo "==> Konfiguruję IBus jako domyślny input method..."
echo 'export GTK_IM_MODULE=ibus' >> ~/.bashrc
echo 'export QT_IM_MODULE=ibus' >> ~/.bashrc
echo 'export XMODIFIERS=@im=ibus' >> ~/.bashrc

# Uruchomienie ibus-daemon
echo "==> Uruchamiam ibus-daemon..."
ibus-daemon -drx

# Dodanie Typing Booster i języków
echo "==> Dodaję Typing Booster i konfiguruję języki (angielski, polski, rosyjski)..."

gsettings set org.freedesktop.ibus.general.hotkey triggers "['<Control><Shift>space']"

dconf write /desktop/ibus/general/preload-engines "['typing-booster']"
dconf write /desktop/ibus/engine/typing-booster/languages "['en', 'pl', 'ru']"

echo "==> Konfiguracja zakończona!"
echo "Zrestartuj system lub wyloguj się i zaloguj ponownie, aby aktywować IBus globalnie."

echo "Użyj Ctrl + Shift + Space, aby przełączać języki w każdej aplikacji."
