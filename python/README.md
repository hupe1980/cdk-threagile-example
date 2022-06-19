# Running the Example
1. Ensure cdktg is installed
```
$ npm install -g cdktg
```

2. Create a Python virtual environment
```
$ python3 -m venv .venv
```

3. Activate virtual environment

_On MacOS or Linux_
```
$ source .venv/bin/activate
```

_On Windows_
```
% .venv\Scripts\activate.bat
```

4. Install the required dependencies.

```
$ pip install -r requirements.txt
```

5. Synthesize the example

```
$ cdktg synth threagile.py
```

6. Analyse the example

```
$ cdktg analyse
```