import io
from setuptools import setup

setup(
    name="dash_core_components",
    version="2.0.0",
    author="Chris Parmer <chris@plotly.com>",
    author_email="chris@plotly.com",
    packages=["dash_core_components"],
    include_package_data=True,
    license="MIT",
    description="Core component suite for Dash",
    long_description=io.open("README.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
    install_requires=[],
)
