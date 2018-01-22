import Link from 'gatsby-link';
import * as React from 'react';

import { primaryNavigation } from '../store';

interface IIndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IIndexPageProps) =>
  <div>
    {/* Master head */}
    <div >
      <div>
        <div>Gatsby 1.0 - Starter kit</div>
        <div>Typescript - Jest </div>
      </div>
    </div>

    {/* About this starter */}
    <div className="stripe">
      <div className="container">
        <div>
          <div>
            <div>Lorem ipsum</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <div>Dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </div>
          <div >
            {/* TODO replace with a pretty GIF */}
            <div>Lorem ipsum</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <div>Dolor sit amet</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </div>
        </div>
      </div>
    </div>

    {/* Key features */}
    <div className="stripe alternate feature">
      <div className="container">
        <div>
          <div>
            <div>
              A kind of magic!
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </div>
          <div>
            <div>
              A kind of magic!
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </div>
          <div>
            <div>
              A kind of magic!
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </div>
        </div>
      </div>
    </div>
  </div>;
