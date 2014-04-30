
////#installATester
npm install attester --save-dev
////#installATester

////#scripts
{
    "scripts": {
        "test": "attester test/attester.json"
    }
}
////#scripts


////#run
npm test
////#run

////#sample
# Specifies which files will be accessible through the web server:
resources:
	'/':
		- 'src'
	'/test':
		- 'test'

# Describes test configuration for each type of test
tests:
	aria-templates:
		classpaths:
			includes:
				- test.MainTestSuite
			excludes:
				#List of test to excluded for any reason:
				- test.aria.core.io.IOXDRTest

# On which browser the campaign should run
# PhantomJS is the default one
browsers:
    - browserName: 'Chrome'
    - browserName: 'Safari'
      os: 'Mac OS X'
    - browserName: 'IE'
      majorVersion: 10
////#sample
