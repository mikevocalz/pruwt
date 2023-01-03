import * as React from "react"
import Svg, { SvgProps, Path, G, Ellipse } from "react-native-svg"
import { StyleProp, ViewStyle } from 'react-native'

interface MorpherProps {
  style?: StyleProp<ViewStyle>
  height: number
  width: number
}
const Morpher = (props: MorpherProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} style={props.style} viewBox="0 0 920 653" >
    <Path
      data-name="Union 1"
      d="M186.761 620.176 49.794 496.812V157.883L186.761 34.519h557.072l126.373 123.364v338.929L743.833 620.176Z"
      fill="#ac1919"
    />
    <G data-name="Group 5">
      <G data-name="Group 4">
        <G data-name="Group 2">
          <Path
            data-name="Path 8"
            d="M25.521 383.36a44.491 44.491 0 0 0-14.994 4.049s-23.686 37.277 0 94.31c2.589-.555 11.636 0 11.636 0s-2.169 34.445 32.573 31.093c2.206 1.677 0-156.617 0-156.617s-31.977-.798-29.215 27.165Z"
            fill="#151515"
          />
          <Path
            data-name="Path 9"
            d="M25.787 386.46s-17.379 52.269-3.078 93.874c-5.822-51.407 3.078-93.874 3.078-93.874Z"
            fill="#343131"
          />
        </G>
        <G data-name="Group 3">
          <Path
            data-name="Path 8"
            d="M894.479 383.36a44.492 44.492 0 0 1 14.994 4.049s23.686 37.277 0 94.31c-2.589-.555-11.636 0-11.636 0s2.169 34.445-32.573 31.093c-2.206 1.677 0-156.617 0-156.617s31.977-.798 29.215 27.165Z"
            fill="#151515"
          />
          <Path
            data-name="Path 9"
            d="M894.209 386.46s17.379 52.269 3.078 93.874c5.824-51.407-3.078-93.874-3.078-93.874Z"
            fill="#343131"
          />
        </G>
      </G>
      <Path
        data-name="Subtraction 4"
        d="M723.366 651.5H194.234c-4.777 0-10.834-1.863-18-5.538a153.176 153.176 0 0 1-23.17-15.247 331.242 331.242 0 0 1-25.819-22.471c-8.741-8.369-17.538-17.5-26.145-27.154s-16.748-19.5-24.214-29.292c-7.658-10.048-14.4-19.765-20.027-28.882a181.442 181.442 0 0 1-13.581-25.873c-3.273-7.997-4.933-14.736-4.933-20.03v-117.83c5.922-3.153 11.44-4.752 16.4-4.752a18.413 18.413 0 0 1 7.9 1.646 10.729 10.729 0 0 1 2.581 1.643l.059.082c4.292 6.019 26.321 36.875 38.542 53.263 2.438 3.269 5.2 4.927 8.206 4.927 2.607 0 5.433-1.242 8.4-3.691a44.44 44.44 0 0 0 7.334-8.119 89.018 89.018 0 0 0 7.162-11.809c.3-.582 29.917-58.635 45.935-95.675 4.482-10.365 9.791-17.946 15.782-22.533a25.5 25.5 0 0 1 7.532-4.058 20.849 20.849 0 0 1 6.5-1.053 17.9 17.9 0 0 1 7.823 1.659 55.365 55.365 0 0 0 6.657-5.9 27.352 27.352 0 0 0 4.241-5.6 8.522 8.522 0 0 0 1.225-5.789c-.8-3.678-5.332-6.048-13.474-7.043a46.4 46.4 0 0 0-5.6-.351 34.325 34.325 0 0 0-15.637 3.526 32.048 32.048 0 0 0-9.834 7.755 35.459 35.459 0 0 0-6.57 11.281l-.313.648-.215.445c-5.636 11.677-34.553 71.537-49.536 102.532-5.588 11.56-11.538 17.423-17.687 17.424-3.353 0-6.693-1.736-9.927-5.161a34.107 34.107 0 0 1-4.695-6.441l-.047-.082c-1.333-2.312-19.817-30.449-33.212-47.915-3.97-5.177-9.6-7.8-16.725-7.8a36.905 36.905 0 0 0-8.807 1.158V168.3c0-5.3 1.576-11.936 4.685-19.714a170.183 170.183 0 0 1 12.914-25A331.473 331.473 0 0 1 75.023 95.95c7.116-9.34 14.9-18.719 23.125-27.877s16.654-17.812 25.058-25.739a304.943 304.943 0 0 1 24.862-21.24 144.728 144.728 0 0 1 22.5-14.377c7-3.462 12.977-5.217 17.764-5.217h535.034c4.795 0 10.883 1.757 18.1 5.223a155.822 155.822 0 0 1 23.335 14.388 327.587 327.587 0 0 1 26.039 21.248c8.844 7.941 17.727 16.6 26.4 25.744 8.707 9.176 16.94 18.557 24.469 27.882a335.926 335.926 0 0 1 20.248 27.649 167.562 167.562 0 0 1 13.733 24.993c3.308 7.773 4.985 14.394 4.985 19.678v155.477a44.326 44.326 0 0 0-11.059-1.541c-7.692 0-13.764 2.625-18.047 7.8-14.472 17.491-34.4 45.608-35.835 47.915l-.051.082a34.417 34.417 0 0 1-5.068 6.442c-3.49 3.423-7.093 5.159-10.709 5.159-6.633 0-13.054-5.861-19.084-17.423a579206.573 579206.573 0 0 1-53.665-102.95l-.356-.683a35.182 35.182 0 0 0-17.7-19.037 39.478 39.478 0 0 0-16.871-3.525 53.955 53.955 0 0 0-6.037.351c-8.9 1.007-13.8 3.424-14.569 7.184-.341 1.666.137 3.6 1.419 5.762a28.125 28.125 0 0 0 4.577 5.554 59.173 59.173 0 0 0 7.115 5.838 20.837 20.837 0 0 1 8.441-1.659 24.132 24.132 0 0 1 7.012 1.052 28.282 28.282 0 0 1 8.127 4.058c6.462 4.586 12.191 12.167 17.028 22.534 17.275 37.023 49.244 95.093 49.565 95.675a88.051 88.051 0 0 0 7.728 11.81 45.89 45.89 0 0 0 7.909 8.12c3.2 2.449 6.249 3.691 9.061 3.691 3.245 0 6.224-1.658 8.854-4.927 14.039-17.446 40.525-51.882 41.646-53.34a11.249 11.249 0 0 1 2.79-1.648 21.169 21.169 0 0 1 8.525-1.645c5.794 0 12.271 1.865 19.251 5.544v117.038c0 5.292-1.68 12.029-4.992 20.023a180.685 180.685 0 0 1-13.742 25.872c-5.688 9.107-12.5 18.824-20.254 28.883-7.554 9.8-15.789 19.657-24.474 29.293s-17.576 18.781-26.4 27.155a335.772 335.772 0 0 1-26.04 22.474 155.276 155.276 0 0 1-23.332 15.249c-7.215 3.675-13.293 5.538-18.072 5.538Zm-267.85-526.191a164.972 164.972 0 0 0-36.4 4.065 167.332 167.332 0 0 0-33.91 11.659 175.983 175.983 0 0 0-30.685 18.448 187.384 187.384 0 0 0-26.734 24.431 198.587 198.587 0 0 0-22.057 29.611 207.818 207.818 0 0 0-16.656 33.988 215.213 215.213 0 0 0-10.526 37.56 223.388 223.388 0 0 0 0 80.644 215.262 215.262 0 0 0 10.526 37.56 207.843 207.843 0 0 0 16.656 33.988 198.566 198.566 0 0 0 22.057 29.611 187.353 187.353 0 0 0 26.734 24.432 176.017 176.017 0 0 0 30.685 18.448 167.33 167.33 0 0 0 33.91 11.659 165.033 165.033 0 0 0 72.808 0 167.317 167.317 0 0 0 33.91-11.659 176.048 176.048 0 0 0 30.686-18.448 187.433 187.433 0 0 0 26.725-24.43 198.427 198.427 0 0 0 22.058-29.611 207.7 207.7 0 0 0 16.656-33.988 215.124 215.124 0 0 0 10.526-37.56 223.335 223.335 0 0 0 0-80.644 215.063 215.063 0 0 0-10.526-37.56 207.732 207.732 0 0 0-16.656-33.988 198.528 198.528 0 0 0-22.058-29.612 187.4 187.4 0 0 0-26.733-24.431 175.985 175.985 0 0 0-30.686-18.448 167.2 167.2 0 0 0-33.91-11.659 164.959 164.959 0 0 0-36.4-4.066Z"
        fill="#ccc"
        stroke="#707070"
        strokeWidth={3}
      />
      <G data-name="Subtraction 2" fill="#f81818">
        <Path d="M454.02 605.124c-17.027 0-34.043-1.9-50.576-5.647-16.113-3.652-31.962-9.102-47.108-16.197-14.872-6.968-29.216-15.591-42.633-25.632-13.292-9.946-25.791-21.369-37.15-33.95-11.36-12.584-21.674-26.43-30.655-41.154-9.067-14.866-16.855-30.759-23.148-47.237-6.409-16.783-11.33-34.347-14.63-52.203-3.385-18.323-5.101-37.18-5.101-56.051 0-18.871 1.716-37.73 5.101-56.052 3.3-17.856 8.221-35.42 14.63-52.203 6.293-16.478 14.08-32.371 23.148-47.237 8.98-14.724 19.295-28.57 30.655-41.153 11.359-12.582 23.858-24.005 37.15-33.951 13.417-10.04 27.761-18.664 42.633-25.632 15.146-7.095 30.995-12.545 47.108-16.197a229.151 229.151 0 0 1 50.575-5.647c17.028 0 34.044 1.9 50.576 5.647 16.113 3.652 31.962 9.102 47.108 16.197 14.872 6.968 29.216 15.591 42.633 25.632 13.292 9.946 25.791 21.369 37.15 33.95 11.36 12.583 21.674 26.43 30.655 41.154 9.067 14.866 16.855 30.759 23.148 47.237 6.409 16.783 11.33 34.347 14.63 52.203 3.385 18.323 5.101 37.18 5.101 56.052 0 18.87-1.716 37.728-5.101 56.05-3.3 17.857-8.221 35.42-14.63 52.204-6.293 16.478-14.08 32.371-23.148 47.237-8.981 14.725-19.295 28.57-30.655 41.153-11.359 12.582-23.858 24.005-37.15 33.951-13.417 10.04-27.761 18.664-42.633 25.632-15.146 7.095-30.995 12.545-47.108 16.197a229.155 229.155 0 0 1-50.576 5.647Zm1.995-465.391a152.684 152.684 0 0 0-33.7 3.763 154.78 154.78 0 0 0-31.387 10.791c-9.906 4.641-19.46 10.385-28.398 17.073-8.851 6.624-17.175 14.23-24.738 22.608-7.563 8.377-14.429 17.594-20.408 27.397a192.175 192.175 0 0 0-15.407 31.44 198.923 198.923 0 0 0-9.736 34.74 205.817 205.817 0 0 0-3.394 37.297c0 12.556 1.142 25.104 3.394 37.296a198.922 198.922 0 0 0 9.736 34.74 192.168 192.168 0 0 0 15.407 31.44c5.979 9.802 12.845 19.02 20.408 27.397 7.564 8.378 15.887 15.984 24.738 22.607 8.937 6.688 18.492 12.432 28.398 17.074a154.776 154.776 0 0 0 31.387 10.791 152.679 152.679 0 0 0 33.7 3.763c11.346 0 22.685-1.266 33.7-3.763a154.784 154.784 0 0 0 31.388-10.791c9.907-4.642 19.461-10.386 28.398-17.074 8.851-6.623 17.175-14.23 24.739-22.607 7.562-8.377 14.429-17.595 20.407-27.397a192.17 192.17 0 0 0 15.407-31.44 198.922 198.922 0 0 0 9.736-34.74 205.807 205.807 0 0 0 3.395-37.296c0-12.557-1.142-25.105-3.395-37.296a198.923 198.923 0 0 0-9.736-34.74 192.17 192.17 0 0 0-15.407-31.441c-5.978-9.802-12.844-19.02-20.407-27.397-7.564-8.378-15.887-15.984-24.739-22.608-8.937-6.687-18.492-12.432-28.398-17.073a154.784 154.784 0 0 0-31.387-10.791 152.686 152.686 0 0 0-33.7-3.763Z" />
        <Path
          d="M454.02 604.624c16.989 0 33.968-1.896 50.465-5.635 16.078-3.644 31.893-9.082 47.006-16.162 14.84-6.953 29.156-15.559 42.546-25.58 13.266-9.926 25.74-21.327 37.078-33.885 11.34-12.56 21.634-26.38 30.599-41.078 9.052-14.84 16.826-30.706 23.108-47.155 6.398-16.755 11.312-34.29 14.605-52.116 3.38-18.292 5.093-37.12 5.093-55.96 0-18.84-1.714-37.668-5.093-55.96-3.293-17.827-8.207-35.362-14.605-52.116-6.282-16.45-14.056-32.316-23.108-47.156-8.965-14.698-19.26-28.519-30.599-41.078-11.338-12.558-23.812-23.959-37.078-33.886-13.39-10.02-27.705-18.626-42.546-25.579-15.113-7.08-30.928-12.518-47.006-16.162a228.646 228.646 0 0 0-50.466-5.635c-16.99 0-33.969 1.896-50.465 5.635-16.078 3.644-31.893 9.082-47.006 16.162-14.84 6.953-29.155 15.559-42.546 25.58-13.266 9.926-25.74 21.327-37.078 33.885-11.34 12.56-21.634 26.38-30.599 41.078-9.052 14.84-16.826 30.706-23.108 47.156-6.398 16.754-11.312 34.289-14.605 52.115-3.38 18.293-5.093 37.12-5.093 55.96 0 18.84 1.713 37.669 5.093 55.96 3.293 17.827 8.207 35.362 14.605 52.117 6.282 16.45 14.056 32.315 23.108 47.155 8.965 14.698 19.26 28.518 30.599 41.078 11.337 12.558 23.812 23.959 37.078 33.886 13.39 10.02 27.705 18.626 42.546 25.579 15.113 7.08 30.928 12.518 47.006 16.162a228.652 228.652 0 0 0 50.465 5.635m1.996-465.391c11.383 0 22.759 1.27 33.811 3.775a155.293 155.293 0 0 1 31.489 10.826c9.937 4.656 19.521 10.418 28.486 17.126 8.877 6.643 17.224 14.271 24.81 22.673 7.584 8.4 14.468 17.643 20.463 27.471a192.669 192.669 0 0 1 15.447 31.523 199.427 199.427 0 0 1 9.76 34.828 206.308 206.308 0 0 1 3.404 37.387c0 12.587-1.145 25.165-3.403 37.386a199.424 199.424 0 0 1-9.76 34.828 192.67 192.67 0 0 1-15.448 31.523c-5.995 9.828-12.88 19.07-20.463 27.47-7.586 8.403-15.933 16.031-24.81 22.674-8.964 6.708-18.548 12.47-28.486 17.125a155.284 155.284 0 0 1-31.489 10.827 153.182 153.182 0 0 1-33.81 3.775 153.18 153.18 0 0 1-33.811-3.775 155.275 155.275 0 0 1-31.489-10.827c-9.937-4.655-19.521-10.417-28.486-17.125-8.876-6.643-17.224-14.271-24.81-22.673-7.583-8.4-14.468-17.643-20.462-27.471a192.663 192.663 0 0 1-15.448-31.523 199.423 199.423 0 0 1-9.76-34.828 206.31 206.31 0 0 1-3.403-37.386c0-12.587 1.145-25.165 3.403-37.387a199.425 199.425 0 0 1 9.76-34.828 192.677 192.677 0 0 1 15.448-31.523c5.994-9.828 12.88-19.071 20.463-27.47 7.585-8.403 15.932-16.031 24.81-22.674 8.964-6.708 18.548-12.47 28.485-17.126a155.28 155.28 0 0 1 31.489-10.826 153.185 153.185 0 0 1 33.81-3.775m-1.996 466.391a229.654 229.654 0 0 1-50.686-5.66c-16.148-3.66-32.031-9.12-47.209-16.231-14.903-6.982-29.276-15.624-42.72-25.685-13.318-9.965-25.841-21.41-37.222-34.016-11.381-12.606-21.714-26.477-30.71-41.227-9.084-14.892-16.886-30.813-23.189-47.32-6.42-16.811-11.35-34.404-14.654-52.29-3.39-18.353-5.11-37.242-5.11-56.142 0-18.901 1.72-37.79 5.11-56.142 3.304-17.887 8.234-35.48 14.654-52.291 6.303-16.507 14.105-32.427 23.188-47.32 8.997-14.75 19.33-28.621 30.71-41.227 11.382-12.606 23.905-24.051 37.222-34.016 13.445-10.061 27.818-18.703 42.721-25.685 15.178-7.11 31.061-12.571 47.21-16.231a229.65 229.65 0 0 1 50.685-5.66 229.65 229.65 0 0 1 50.687 5.66c16.148 3.66 32.031 9.12 47.209 16.231 14.903 6.982 29.276 15.624 42.72 25.685 13.318 9.965 25.841 21.41 37.222 34.016 11.381 12.606 21.714 26.477 30.71 41.227 9.084 14.893 16.886 30.813 23.189 47.32 6.42 16.811 11.35 34.404 14.654 52.29 3.39 18.353 5.11 37.242 5.11 56.143 0 18.9-1.72 37.79-5.11 56.142-3.304 17.886-8.234 35.479-14.654 52.29-6.303 16.507-14.105 32.428-23.188 47.32-8.997 14.75-19.33 28.621-30.71 41.227-11.382 12.606-23.905 24.051-37.222 34.016-13.445 10.061-27.818 18.703-42.721 25.685-15.178 7.11-31.061 12.571-47.21 16.232a229.654 229.654 0 0 1-50.686 5.66Zm1.996-465.391c-11.308 0-22.61 1.261-33.59 3.75a154.274 154.274 0 0 0-31.285 10.757c-9.875 4.627-19.4 10.353-28.31 17.02-8.826 6.605-17.125 14.19-24.667 22.543-7.542 8.354-14.39 17.546-20.352 27.322a191.677 191.677 0 0 0-15.366 31.358 198.423 198.423 0 0 0-9.712 34.654 205.314 205.314 0 0 0-3.386 37.205c0 12.525 1.14 25.043 3.386 37.205a198.421 198.421 0 0 0 9.712 34.653 191.666 191.666 0 0 0 15.366 31.358c5.963 9.775 12.81 18.968 20.352 27.322s15.841 15.938 24.666 22.542c8.91 6.668 18.436 12.394 28.311 17.02a154.274 154.274 0 0 0 31.286 10.758 152.178 152.178 0 0 0 33.59 3.75 152.18 152.18 0 0 0 33.59-3.75 154.28 154.28 0 0 0 31.285-10.757c9.875-4.627 19.4-10.353 28.31-17.021 8.826-6.604 17.125-14.188 24.667-22.542 7.543-8.354 14.39-17.547 20.352-27.322a191.668 191.668 0 0 0 15.367-31.358 198.422 198.422 0 0 0 9.712-34.653 205.306 205.306 0 0 0 3.386-37.205 205.31 205.31 0 0 0-3.386-37.205 198.425 198.425 0 0 0-9.712-34.654 191.67 191.67 0 0 0-15.367-31.358c-5.962-9.775-12.81-18.968-20.352-27.322s-15.84-15.938-24.666-22.542c-8.91-6.668-18.436-12.394-28.311-17.021a154.286 154.286 0 0 0-31.286-10.757 152.184 152.184 0 0 0-33.59-3.75Z"
          fill="#707070"
        />
      </G>
      <G data-name="Group 1" fill="#0a0a0a">
        <Path
          data-name="Path 4"
          d="M113.322 363.637c.01 1.161 22.428-79.488 83.173-141.989 2.613.709 25.613-123.523 172.221-187.067 2.422-1.325-76.663-.876-160.872 82.69.094-2.386 18.789-71.665 19.278-70.405s-125.235 87.464-113.8 316.771Z"
        />
        <Path
          data-name="Path 6"
          d="M799.177 363.637c-.01 1.161-22.428-79.488-83.173-141.989-2.613.709-25.613-123.523-172.221-187.067-2.422-1.325 76.663-.876 160.872 82.69-.094-2.386-18.789-71.665-19.278-70.405s125.235 87.464 113.8 316.771Z"
        />
        <Path
          data-name="Path 5"
          d="M368.771 616.283c-25.886-9.786-182.089-63.948-189.2-272.825-1.267-3.669-53.512 105.651-53.512 105.651s48.467 134.274 94.806 156.711c1.19-1.1-23.519-66.483-19.29-69.963s103.531 94.126 167.196 80.426Z"
        />
        <Path
          data-name="Path 7"
          d="M543.73 616.283c25.886-9.786 182.089-63.948 189.2-272.825 1.265-3.669 53.512 105.651 53.512 105.651s-48.467 134.274-94.806 156.711c-1.19-1.1 23.519-66.483 19.29-69.963s-103.532 94.126-167.196 80.426Z"
        />
      </G>
      <G
        data-name="Ellipse 4"
        transform="translate(270.384 123.009)"
        fill="none"
        stroke="#000"
        strokeWidth={20}
      >
        <Ellipse
          cx={186.13}
          cy={203.085}
          rx={186.13}
          ry={203.085}
          stroke="none"
        />
        <Ellipse cx={186.13} cy={203.085} rx={176.13} ry={193.085} />
      </G>
    </G>
  </Svg>
)

export default Morpher
