import argparse
import os
import re
import sys


RE_COHORT_NAME = re.compile('(AC_\d.\d)_Instructor')


class Unit:
    def __init__(self, unit_name, config):
        self.unit_name = unit_name
        self.folder_source = os.path.join(config.folder_student_units, self.unit_name, 'lessons')
        if not os.path.isdir(self.folder_source):
            raise AssertionError('%s is not a valid lessons folder' % self.folder_source)
        self.folder_target = os.path.join(config.folder_instuctor_units, self.unit_name)
        if not os.path.isdir(self.folder_target):
            os.makedirs(self.folder_target)

    def extract_plans(self):
        print('Processing lessons for unit %s' % self.unit_name)
        for file_lesson in os.listdir(self.folder_source):
            if file_lesson.endswith('.md') and os.path.isfile(os.path.join(self.folder_source, file_lesson)):
                self.extract_a_plan(file_lesson)

    def extract_a_plan(self, file_lesson):
        print('  Lesson %s' % file_lesson)


class Config():
    def __init__(self):
        self.folder_instuctor_units = os.path.dirname(os.path.realpath(__file__))
        self.folder_student_units = RE_COHORT_NAME.sub(r'\1', self.folder_instuctor_units)


def main():
    parser = argparse.ArgumentParser(description='Process lessons into plans for a given unit.')
    parser.add_argument('unit', nargs='*', help='name of a unit')
    args = parser.parse_args()

    config = Config()

    any_failed = False
    for unit in args.unit:
        try:
            Unit(unit, config).extract_plans()
        except AssertionError as e:
            print(e.message)
            any_failed = True

    if any_failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
