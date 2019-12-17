#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class

import speech_recognition as sr
import sys

# obtain audio from the microphone
r = sr.Recognizer()
with sr.Microphone() as source:
    audio = r.listen(source, 1, 3)

# recognize speech using Sphinx
try:
    print(r.recognize_sphinx(audio, "ca-es"))
except sr.UnknownValueError:
    print("Sphinx could not understand audio")
except sr.RequestError as e:
    print("Sphinx error; {0}".format(e))

sys.stdout.flush()